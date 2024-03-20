import discord
from discord.ext import commands
import random

id_do_servidor = 1134496632239575041

intents = discord.Intents.default()
intents.messages = True  # Habilita a leitura de mensagens para usar comandos

bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f"Entramos como {bot.user}.")

@bot.command(name='rolar-dado', help='Lança um dado de 20 lados')
async def roll_dice(ctx):
    resultado = random.randint(1, 20)
    await ctx.send(f"Você rolou um dado de 20 lados e o resultado foi: {resultado}")

@bot.command(name='olá', help='Teste')
async def hello(ctx):
    await ctx.send("Estou funcionando!")

@bot.command(name='boa-noite', help='Boa noite André')
async def good_night(ctx):
    await ctx.send("Estou funcionando!")

bot.run('MTEyOTYxMzU5MDc0MDA3NDYxNw.G8vXvr.VPohVktpYEqWkZ-bH0c07pbikZ4qUeu_lGRByA')
