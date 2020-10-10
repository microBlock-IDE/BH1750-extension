from machine import Pin
from machine import I2C
from time import sleep

BH1750_ADDR = None

def read(addr=0x23):
    global BH1750_ADDR
    i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=100000)
    if addr != BH1750_ADDR:
        BH1750_ADDR = addr
        i2c1.writeto(BH1750_ADDR, b'\x10')
        sleep(0.2)
    h, l = i2c1.readfrom(BH1750_ADDR, 2)
    return int(((h << 8) | l) / 1.2)
