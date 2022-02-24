package com.example.services;

import javax.transaction.Transactional;

import com.example.repository.PurchaseRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PurchaseService {
    private PurchaseRepo pr;

    public PurchaseService(){}

    @Autowired
    public PurchaseService(PurchaseRepo pr) {
        this.pr = pr;
    }
}
