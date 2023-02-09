import random
import time

decisions = ['Rock', 'Paper', 'Scissors']


def game():
    count = 0
    computer = 0
    
    
    while count < 2 or computer < 2 :
        # Enter decisions
        option = input('[*] Enter Rock, Paper or Scissors: ').capitalize()
        
        azar = random.choice(decisions)
        if option in decisions:
            if azar == option:
                print(option, 'vs', azar,' ->DRAW')
                count+=0
                computer+=0
            
            # Gana pc
            elif (azar == 'Rock' and option == 'Scissors') or (azar == 'Paper' and option == 'Rock') or (azar == 'Scissors' and option == 'Paper'):
                
                print(option, 'vs', azar,'-> WIN COMPUTER')
                computer+=1

            # Gana Player
            elif (option == 'Rock' and azar == 'Scissors') or (option == 'Paper' and azar == 'Rock') or (option == 'Scissors' and azar == 'Paper') :
                print(option, 'vs', azar,'-> WIN PLAYER')
                count+=1
            
             
            if count == 2:
                print('[+] Final User Winner')
                break
            elif computer==2:
                print('[+] Final Computer Winner')
                break
        else :
            print('Enter option again')
            time.sleep(2)
            
            
            
def main():
    game()
    
if __name__ == '__main__':
    main()