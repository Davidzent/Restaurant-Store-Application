package com.P02.modules;

public class User {
    int user_id;
    String username;
    String password;
    String fname;
    String lname;
    String email;
    int roleid;

    public User(int user_id, String username, String password, String fname, String lname, String email, int roleid) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.roleid = roleid;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getRoleid() {
        return roleid;
    }

    public void setRoleid(int roleid) {
        this.roleid = roleid;
    }

    @Override
    public String toString() {
        return "User [email=" + email + ", fname=" + fname + ", lname=" + lname + ", password=" + password + ", roleid="
                + roleid + ", user_id=" + user_id + ", username=" + username + "]";
    }

    
}
