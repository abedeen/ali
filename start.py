import os
import shutil
import re

def replaceBetween(content,sp,repl):    
    content = re.sub(sp,repl,content)
    return content
def fullGenMenu(m,main,mob):
    lmain = main.replace(m+".html","#")
    lmob = mob.replace(m+".html","#")
    return lmain,lmob
    print(m)
def genereateName(obj):
    return obj.replace(' ','')+".html"

def generateMobileMenu(obj):
    res =[]
    if obj[1]!=None:
        
        menu='<li class="menu-item-has-children">\n'
        menu+='<a href="#">'+obj[0]+'</a>\n'
        res.append(obj[0])
        menu+='<ul class="sub-menu">\n'
        for y in obj[1]:
            menu+=' <li><a href="'+genereateName(y)+'">'+y+'</a></li>\n'
            res.append(y)
        menu+='</ul>\n'
        menu+='</li>\n'        
    else:                
        menu='<li class="menu-item-has-children">\n'
        menu+='<a href="'+genereateName(obj[0])+'">'+obj[0]+'</a>\n'
        res.append(obj[0])
        menu+='</li>\n'
    return menu,res
def generateMenu(obj):    
    if obj[1]!=None:        
        menu='<li><a href="#">'+obj[0]+' <i class="fa fa-angle-down"></i></a>\n'
        menu+='<ul class="sub_menu">\n'
        for y in obj[1]:
            menu+='<li><a href="'+genereateName(y)+'">'+y+'</a></li>\n'            
        menu+='</ul>\n'    
    else:                
        menu='<li><a href="'+genereateName(obj[0])+'">'+obj[0]+'<i class="fa fa-angle-down"></i></a>\n'        
        menu+='</li>\n'
    return menu
menu = [
    ['Best Selling',['Arabic Attars','Arabic Perfumes','French Attars','French Perfumes'],0],
    ['Premium',['Premium Perfumes','Premium Attars'],0],
    ['Attars',['French','Arabian','Indian'],1],
    ['Perfumes',['French','Arabic','Indian'],1],
    ['Branded Fragrances',['Al-Haramain','Ajmal','Rasasi','Other'],1],
    ['Incense',['Bakhoor & Oudh','Oudh Burners'],0],
    ['Fancy Bottles',['Attar Bottles','Perfume Bottles'],0],
    ['Gift Sets',None,0],
    ['Accessories',None,0]
]


my=''
mainY=''
gres=["wishlist"]
for x in menu:
    res=[]
    y1,res =  generateMobileMenu(x)
    if x[2]==1:
        mainY+=generateMenu(x)
    my=my+y1
    y = gres+res
for x in gres:
    y,z = fullGenMenu(x,mainY,my)  
    src = genereateName(x); 
    if os.path.isfile(src) :
        print("found")        
    else:
        shutil.copyfile("shop-fullwidth-list.html", src)
    file1 = open(src, "r+")            
    content = file1.read()
    content = replaceBetween(content,"<!--main menu start-->([\s\S]*?)<!--main menu end-->","<!--main menu start-->"+y+"<!--main menu end-->")    
    content = replaceBetween(content,"<!--mob menu start-->([\s\S]*?)<!--mob menu end-->","<!--mob menu start-->"+z+"<!--mob menu end-->")
    content = content.replace("%%%%%%%",x)
    f = open(src, "w")
    f.write(content)
    f.close()
