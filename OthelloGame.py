#Logan Knies 475
import tkinter as tk
from tkinter import messagebox
import copy

#constants
EMPTY = '.'
BLACK = 'B'
WHITE = 'W'


DIRECTIONS = [(-1, 0), (-1, 1), (0, 1), (1, 1),
              (1, 0), (1, -1), (0, -1), (-1, -1)]


#weights heuristic 
WEIGHTS = [
    [100, -30, 10, 5, 5, 10, -30, 100],
    [-30, -60, -2, -2, -2, -2, -60, -30],
    [10, -2, 0, 0, 0, 0, -2, 10],
    [5, -2, 0, 0, 0, 0, -2, 5],
    [5, -2, 0, 0, 0, 0, -2, 5],
    [10, -2, 0, 0, 0, 0, -2, 10],
    [-30, -60, -2, -2, -2, -2, -60, -30],
    [100, -30, 10, 5, 5, 10, -30, 100]
]

#global var
DEBUG = False
nodes_searched = 0
AB_PRUNING = True
ai_enabled = {BLACK: False, WHITE: False}
depth = 3  #gonna be the default
debug_info = []
move_hist = [] #to track

#game var
brd_SIZE = 8
buttons = [[None for _ in range(brd_SIZE)] for _ in range(brd_SIZE)]
brd = None
curr_player = BLACK

def create_brd():
    return [[EMPTY for _ in range(brd_SIZE)] for _ in range(brd_SIZE)]

def initialize_brd(brd):
    brd[3][3] = WHITE
    brd[3][4] = BLACK
    brd[4][3] = BLACK
    brd[4][4] = WHITE

def opp_color(player):
    if player == WHITE:
        return BLACK
    else:
        return WHITE

def check_pos(x, y):#if position is legal
    if (0 <= x < brd_SIZE) and (0 <= y < brd_SIZE):
        return True
    else:
        return False 

def check_empty(brd, x, y):
    if brd[x][y] == EMPTY: #if individual spot is empty
        return True

def check_legal(brd, x, y, player):
    opp = opp_color(player)
    if (not check_pos(x, y)) or (not check_empty(brd, x, y)):
        return False
    
    for dx, dy in DIRECTIONS:
        nx, ny = x + dx, y + dy
        found_opp = False

        while ((check_pos(nx, ny)) and (brd[nx][ny] == opp)):
            nx += dx
            ny += dy
            found_opp = True
        
        if found_opp and check_pos(nx, ny) and (brd[nx][ny] == player):
            return True
    return False

def make_move(brd, x, y, player):
    opp = opp_color(player)
    brd[x][y] = player
    for dx, dy in DIRECTIONS:
        nx, ny = x + dx, y + dy
        spots_to_flip = []
        while check_pos(nx, ny) and brd[nx][ny] == opp:
            spots_to_flip.append((nx, ny))
            nx += dx
            ny += dy
        if spots_to_flip and check_pos(nx, ny) and brd[nx][ny] == player:
            for flip_x, flip_y in spots_to_flip:
                brd[flip_x][flip_y] = player
    # integrate history
    move_hist.append((player, (x, y), copy_brd(brd)))
    check_brd_state(brd)

def check_has_moves(brd, player):
    for x in range(brd_SIZE):
        for y in range(brd_SIZE):
            if check_legal(brd, x, y, player):
                return True
    return False

def check_brd_state(brd):
    return not (check_has_moves(brd, BLACK) or check_has_moves(brd, WHITE))

def cnt_pnts(brd):
    black_spots = sum(row.count(BLACK) for row in brd)
    white_spots = sum(row.count(WHITE) for row in brd)
    return black_spots, white_spots

def eval_brd(brd, player):
    opp = opp_color(player)
    score = 0
    for x in range(brd_SIZE):
        for y in range(brd_SIZE):
            if brd[x][y] == player:
                score += WEIGHTS[x][y]
            elif brd[x][y] == opp:
                score -= WEIGHTS[x][y]
    return score

def copy_brd(brd):
    return copy.deepcopy(brd)

#minimax with ab
def minimax_ab(brd, depth, alpha, beta, maximizing_player, player, move_sequence=[]):
    global nodes_searched
    nodes_searched += 1
    if depth == 0 or check_brd_state(brd):
        eval = eval_brd(brd, player)
        if DEBUG:
            sequence_str = ' -> '.join([f"{move}" for move in move_sequence])
            debug_info.append(f"Sequence: {sequence_str}, Eval: {eval}")
        return eval, None
    
    valid_moves = []
    for x in range(brd_SIZE):
        for y in range(brd_SIZE):
            if check_legal(brd, x, y, player):
                valid_moves.append((x, y))

    if not valid_moves:
        return minimax_ab(brd, depth - 1, alpha, beta, not maximizing_player, opp_color(player), move_sequence)
    best_move = None

    if maximizing_player:
        max_eval = float('-inf')
        for move in valid_moves:
            new_brd = copy_brd(brd)
            make_move(new_brd, move[0], move[1], player)
            new_sequence = move_sequence + [move]
            eval, _ = minimax_ab(new_brd, depth - 1, alpha, beta, False, opp_color(player), new_sequence)

            if eval > max_eval:
                max_eval = eval
                best_move = move

            alpha = max(alpha, eval)

            if beta <= alpha:
                break
        return max_eval, best_move
    else:
        min_eval = float('inf')
        for move in valid_moves:
            new_brd = copy_brd(brd)
            make_move(new_brd, move[0], move[1], player)
            new_sequence = move_sequence + [move]
            eval, _ = minimax_ab(new_brd, depth - 1, alpha, beta, True, opp_color(player), new_sequence)

            if eval < min_eval:
                min_eval = eval
                best_move = move

            beta = min(beta, eval)

            if beta <= alpha:
                break
        return min_eval, best_move

#minimax no ab
def minimax(brd, depth, maximizing_player, player, move_sequence=[]):
    global nodes_searched
    nodes_searched += 1

    if depth == 0 or check_brd_state(brd):
        eval = eval_brd(brd, player)

        if DEBUG == True:
            sequence_str = ' -> '.join([f"{move}" for move in move_sequence])
            debug_info.append(f"Sequence: {sequence_str}, Eval: {eval}")
        return eval, None

    valid_moves = []
    for x in range(brd_SIZE):
        for y in range(brd_SIZE):
            if check_legal(brd, x, y, player):
                valid_moves.append((x, y))


    if not valid_moves:
        return minimax(brd, depth - 1, not maximizing_player, opp_color(player), move_sequence)
    
    best_move = None

    if maximizing_player:
        max_eval = float('-inf')

        for move in valid_moves:
            new_brd = copy_brd(brd)
            make_move(new_brd, move[0], move[1], player)
            new_sequence = move_sequence + [move]
            eval, _ = minimax(new_brd, depth - 1, False, opp_color(player), new_sequence)

            if eval > max_eval:
                max_eval = eval
                best_move = move
        return max_eval, best_move
    else:
        min_eval = float('inf')

        for move in valid_moves:
            new_brd = copy_brd(brd)
            make_move(new_brd, move[0], move[1], player)
            new_sequence = move_sequence + [move]
            eval, _ = minimax(new_brd, depth - 1, True, opp_color(player), new_sequence)

            if eval < min_eval:
                min_eval = eval
                best_move = move
        return min_eval, best_move

def updt_brd():
    for x in range(brd_SIZE):
        for y in range(brd_SIZE):
            piece = brd[x][y]
            if piece == BLACK:
                symbol = '⚫️'
            elif piece == WHITE:
                symbol = '⚪️'
            else:
                symbol = ' '  
            buttons[x][y]['text'] = symbol

def on_cell_clicked(x, y):
    global curr_player
    if check_legal(brd, x, y, curr_player):
        make_move(brd, x, y, curr_player)
        updt_brd()
        check_game_state()
        switch_player()
        if ai_enabled[curr_player]:
            root.after(500, ai_move)
    else:
        messagebox.showinfo("Invalid Move", "That move is not valid. Please try again.")

def switch_player():
    global curr_player
    curr_player = opp_color(curr_player)
    update_status()

def update_status():
    black_spots, white_spots = cnt_pnts(brd)
    status_label['text'] = f"Current Player: {curr_player}    Black: {black_spots}    White: {white_spots}"

def ai_move():
    global curr_player, debug_info
    if check_has_moves(brd, curr_player):
        global nodes_searched
        nodes_searched = 0
        debug_info = [] 

        if AB_PRUNING:
            eval, move = minimax_ab(brd, depth, float('-inf'), float('inf'), True, curr_player, [])
        else:
            eval, move = minimax(brd, depth, True, curr_player, [])

        if move:
            make_move(brd, move[0], move[1], curr_player)
            updt_brd()
            # Display ai move, nodes searched, and current player
            status_message = f"AI ({curr_player}) plays at {move}. Nodes searched: {nodes_searched}"
            status_label['text'] = status_message
            nodes_searched_label['text'] = f"Total Game States Examined: {nodes_searched}"
            if DEBUG and debug_info:
                dbg_info_disp()
            check_game_state()
            switch_player()
            if ai_enabled[curr_player]:
                root.after(500, ai_move)
        else:
            messagebox.showinfo("No Moves", f"{curr_player} has no valid moves.")
            switch_player()
            if ai_enabled[curr_player]:
                root.after(500, ai_move)
    else:
        messagebox.showinfo("No Moves", f"{curr_player} has no valid moves.")
        switch_player()
        if ai_enabled[curr_player]:
            root.after(500, ai_move)

def dbg_info_disp():
    debug_window = tk.Toplevel(root)
    debug_window.title("Debug Information")
    text_widget = tk.Text(debug_window, wrap='word')
    text_widget.pack(expand=True, fill='both')
    for info in debug_info:
        text_widget.insert('end', info + '\n')
    text_widget.config(state='disabled')

def move_hist_disp():
    history_window = tk.Toplevel(root)
    history_window.title("Game History")
    text_widget = tk.Text(history_window, wrap='word')
    text_widget.pack(expand=True, fill='both')

    for index, (player, move, brd_state) in enumerate(move_hist, 1):
        for row in brd_state:
            brd_str = '\n'.join([' '.join(row)])
        text_widget.insert('end', f"Move {index}: {player} at {move}\n{brd_str}\n\n")
    text_widget.config(state='disabled')

def move_hist_save():
    with open("othello_hist.txt", "w") as file:
        for index, (player, move, brd_state) in enumerate(move_hist, 1):
            for row in brd_state:
                brd_str = '\n'.join([' '.join(row)])
            file.write(f"Move {index}: {player} at {move}\n{brd_str}\n\n")
    messagebox.showinfo("Saved", "Game history has been saved to othello_hist.txt")

def check_game_state():
    if check_brd_state(brd) == True:
        black_spots, white_spots = cnt_pnts(brd)
        if black_spots > white_spots:
            winner = "Black wins!"
        elif white_spots > black_spots:
            winner = "White wins!"
        else:
            winner = "It's a draw!"
        messagebox.showinfo("Game Over", winner)
        root.quit()

def toggle_ai(player):
    ai_enabled[player] = not ai_enabled[player]
    if ai_enabled[player]:
        status = "enabled"
    else:
        status = "disabled"
    messagebox.showinfo("AI Assistance", f"AI assistance for {player} is now {status}.")

    if ai_enabled[curr_player]:
        root.after(500, ai_move())

def disp_settings():
    settings_window = tk.Toplevel(root)
    settings_window.title("AI Settings")

   
    tk.Label(settings_window, text="Search Depth:").grid(row=0, column=0, sticky="w") #Search Depth
    depth_var = tk.IntVar(value=depth)
    tk.Entry(settings_window, textvariable=depth_var).grid(row=0, column=1)

  
    debug_var = tk.BooleanVar(value=DEBUG)#Debug Mode
    tk.Checkbutton(settings_window, text="Enable Debug Mode", variable=debug_var).grid(row=1, column=0, columnspan=2, sticky="w")

   
    ab_var = tk.BooleanVar(value=AB_PRUNING) #Alpha-Beta Pruning
    tk.Checkbutton(settings_window, text="Enable Alpha-Beta Pruning", variable=ab_var).grid(row=2, column=0, columnspan=2, sticky="w")

    def apply_settings():
        global depth, DEBUG, AB_PRUNING
        depth = depth_var.get()
        DEBUG = debug_var.get()
        AB_PRUNING = ab_var.get()
        settings_window.destroy()
        if ai_enabled[curr_player]:
            root.after(500, ai_move)

    tk.Button(settings_window, text="Apply", command=apply_settings).grid(row=3, column=0, columnspan=2)

def create_brd_gui():
    for x in range(brd_SIZE):
        for y in range(brd_SIZE):
            button = tk.Button(root, text=' ', width=4, height=2,
                               command=lambda x=x, y=y: on_cell_clicked(x, y))
            button.grid(row=x, column=y)
            buttons[x][y] = button


brd = create_brd()#initialize game var
initialize_brd(brd)
curr_player = BLACK


root = tk.Tk()#initialize gui window
root.title("Othello LETS GOOOOO Coriell WOO")


create_brd_gui()
updt_brd()

#status
status_label = tk.Label(root, text="")
status_label.grid(row=brd_SIZE, column=0, columnspan=8)
update_status()

#nodes searched
nodes_searched_label = tk.Label(root, text="Total Game States Examined: 0")
nodes_searched_label.grid(row=brd_SIZE + 3, column=0, columnspan=8)


#buttons
ai_black_button = tk.Button(root, text="Toggle AI for Black", command=lambda: toggle_ai(BLACK))
ai_black_button.grid(row=brd_SIZE + 1, column=0, columnspan=4)

ai_white_button = tk.Button(root, text="Toggle AI for White", command=lambda: toggle_ai(WHITE))
ai_white_button.grid(row=brd_SIZE + 1, column=4, columnspan=4)


ai_settings_button = tk.Button(root, text="AI Settings", command=disp_settings)
ai_settings_button.grid(row=brd_SIZE + 2, column=0, columnspan=8)


display_history_button = tk.Button(root, text="Display Game History", command=move_hist_disp)
display_history_button.grid(row=brd_SIZE + 4, column=0, columnspan=4)


save_history_button = tk.Button(root, text="Save Game History", command=move_hist_save)
save_history_button.grid(row=brd_SIZE + 4, column=4, columnspan=4)


if ai_enabled[curr_player]:
    root.after(500, ai_move)


root.mainloop() #run it
