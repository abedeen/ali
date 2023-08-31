import os
import re
def readFile(obj):
   file1 = open(obj, "r+")            
   content = file1.read()
   return content
def writeFile(obj,content):
     f = open(obj, "w")
     f.write(content)
     f.close()
   
def replaceBetween(content,sp,repl):    
    content = re.sub(sp,repl,content)
    return content
def commentBetween(content,sp,p):
    content = re.sub(sp,"<!-- "+p+"-->",content)
    return content
footer = readFile("footer.ts")
#for filename in os.listdir(os.getcwd()):
#   if filename.endswith(".html"):
filename="index.html"
content = readFile(filename)
#content = replaceBetween(content,"<footer ([\s\S]*?)</footer>",footer)

content = commentBetween(content, r"<li class=\"header-wishlist\"([\s\S]*?)<\/li>","whitelist")
content = commentBetween(content, r"<li class=\"add_to_cart\"([\s\S]*?)<\/li>", "cart")
content = commentBetween(content, r"<li class=\"wishlist\"([\s\S]*?)<\/li>", "cart")
content = commentBetween(content, r"<li class=\"compare\"([\s\S]*?)<\/li>", "cart")

writeFile(filename,content)
print("done.")
