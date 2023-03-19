# -*- coding: UTF-8 –*-
import os

index = 1
path = 'E:\\GithubBlog\\themes\\butterfly\\source\\img\\cover\\'
for filename in os.listdir(path):  # 文件夹路径，也可以替换其他
    # newname = "cover-" + filename  # 在每个文件前面加个logo-的字符
    newname = filename.replace('cover-', '')  # 把jpg替换成png
    # newname = "cover-" + str(index) + ".jpg"
    os.rename(path + filename, path + newname)
    index = index + 1
