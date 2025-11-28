# Unformatted Python code for demonstrating post-write hook

def hello(  name ):
    print(  "Hello, "+name )

def   calculate( a,b,c ):
    result=a+b*c
    return result

class   MyClass:
    def __init__(self,x,y):
        self.x=x
        self.y=y

    def   get_sum(  self  ):
        return self.x+self.y

# This code is intentionally poorly formatted
# The post-write hook should auto-format it with black or autopep8
