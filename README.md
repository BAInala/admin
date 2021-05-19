# admin
vscode  第一次上传
1.去github新建一个仓库
2. 终端中打开文件的根目录
   输入git init 该命令用于初始化仓库 
   输入git status  该命令用于查看文件状态
   
3. git add .     将文件添加到暂存区
4. git commit -m "提交的描述"
5. git remote add origin git@github.com:wahaah/openFileDemo.git     orgin--自定义从仓库别名       git@...-----这是仓库地址
6. git push -u origin master              master----分支名称


############
git push -u origin main            将master分支移到main
git clone -b 分支名称  项目地址
假设分支名称是test 则
git clone -b test 项目地址
 git命令查看当前分支  ：  git  branch
 git命令 切换分支：       git checkout 分支名
 合并分支：               将test合并到master-----------先切换到master  然后执行 ： git merge test
 



