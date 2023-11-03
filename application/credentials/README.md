Website URL: 18.212.157.140 

SSH URL: ec2-18-212-157-140.compute-1.amazonaws.com
SSH Username: ubuntu  
SSH Password/ Key: Gator.pem, https://drive.google.com/file/d/1ZoHZpDwavXRnl6txGnlk12taIutS1XWx/view?usp=drive_link

Database URL: database-1.c8bx6xgcysm5.us-east-1.rds.amazonaws.com  
Database Username: admin  
Database Password: 921359982

SSH into the instance:  
  - Run this command in terminal: ssh -i [path to your private key] [username]@[SSH URL]  
    Ex. ssh -i ~/.ssh/Gators.pem ubuntu@ec2-18-212-157-140.compute-1.amazonaws.com

Access Database from instance:  
 - Run this command when inside the instance: mysql -h [endpoint] -P [port] -u [username] -p  
   Ex. mysql -h database-1.c8bx6xgcysm5.us-east-1.rds.amazonaws.com -P 3306 -u admin -p

Get to Git Repo in Instance:
 - cd /var/www/html/csc648-848-05-sw-engineering-fall-23-T03/

Open Nginx Default Configuration File:
 - sudo nano /etc/nginx/sites-available/default


   
