### user register
-name
-email
-password

1.check all inputs is right 
2.if error respose it json 
3.password must hash
4.create user in database

### user login
-email
-password

1.check email and password
2.if email and password not match or email is not in database desiplay error in json
3.if all good create jwt
4.retern dashboard

### jobs
1.create job (post)
2.get all job (get)
3.get single job (get)
4.update job (patch)
5.delete job (delete)

1.create schema
2.create controllers 

`Create schema`
1.title
2.description
3.isdone
4.created date (auto)
5.created by (user/forigenkey - users: _id)
