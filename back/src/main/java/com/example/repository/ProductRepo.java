package com.example.repository;

import java.util.List;

import com.example.modules.Product;
import com.example.modules.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
    List<Product> findAllBySeller(User p);
    List<Product> findByNameContaining(String s);
    
}

