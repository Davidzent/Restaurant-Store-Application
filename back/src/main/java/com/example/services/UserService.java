package com.example.services;

import java.util.List;

import com.example.modules.User;
import com.example.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {
    private UserRepo ur;

    public UserService(){}

    @Autowired
    public UserService(UserRepo ur) {
        this.ur = ur;
    }

    public User register(User u){
        return ur.save(u);
    }

    public User Login(String username,String password){
        return ur.findByUsernameAndPassword(username,password);
    }

    public List<User> getAllUsers() {
        return ur.findAll();
    }

    // public Assignment getAssignmentById(int id){
    //     return ar.getById(id);
    // }

    // public void turnInAssignment(Assignment a) throws AssignmentPastDueException {
    //     long today = System.currentTimeMillis();
    //     Date turnInDate = new Date(today);

    //     //Check to see if it was turned in on time
    //     if(turnInDate.compareTo(a.getDue()) > 0){
    //         a.setPastDue(true);
    //         a.setDone(true);
    //         ar.save(a);
    //         throw new AssignmentPastDueException();
    //     }
    //     a.setDone(true);
    //     ar.save(a);
    // }

    // public Assignment gradeAssignment(double grade, Assignment a){
    //     if(a.isPastDue()){
    //         grade = grade * .8;
    //         a.setGrade(grade);
    //     } else {
    //         a.setGrade(grade);
    //     }

    //     return ar.save(a);
    // }
}
