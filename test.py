import re
src = 'index.html'
file1 = open(src, "r+")            
s = file1.read()
#s = 'iwantthis123jasd'
result = re.search('<!--mob menu start-->([\s\S]*?)<!--mob menu end-->', s)
mt = result.group(1)