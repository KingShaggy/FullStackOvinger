package com.mikkelof.oving4.service;

import org.springframework.stereotype.Service;

@Service
public class Oving4Service {
    public double add(double num1, double num2){
        return num1 + num2;
    }

    public double subtract(double num1, double num2) {
        return  num1 - num2;
    }

    public double multiply(double num1, double num2){
        return num1*num2;
    }

    public double divide(double num1, double num2) {
        return (num1/num2);
    }
}
