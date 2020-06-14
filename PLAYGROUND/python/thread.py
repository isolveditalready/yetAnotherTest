import threading
import time

start = time.perf_counter()

def do_something():
    print('sleeping 1 sec')
    time.sleep(1)
    print('Done sleeping')

threads = []

for _ in range(10):
    t = threading.Thread(target=do_something)
    t.start()
    threads.append(t)

for th in threads:
    th.join() 

finish = time.perf_counter()
print(f'Finished in {round(finish-start,2)} second(s)')