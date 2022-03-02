package com.mikkelof.oving4.web;


import com.mikkelof.oving4.model.Oving4Model;
import com.mikkelof.oving4.service.Oving4Service;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Oving4Controller {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private Oving4Service calculation;

    @Autowired
    private Oving4Model equation;

    @GetMapping("/calculate/{num1}/{operator}/{num2}")

    //calculate-method takes three parameters, fetched from URL by using PathVariable

    public double calculate(
            @PathVariable("num1") String num1,
            @PathVariable("operator") String operator,
            @PathVariable("num2") String num2
    ) {
        if (operator.equals("div")) {
            operator = "/";
        }
        logger.info("Calculate is called with this equation: " + num1 + operator + num2);

        double result;

        equation.setNum1(num1);
        equation.setOperator(operator);
        equation.setNum2(num2);

        switch (operator) {
            case "+":
                result = calculation.add(Double.parseDouble(num1), Double.parseDouble(num2));
                logger.info("Add method called");
                break;
            case "-":
                result = calculation.subtract(Double.parseDouble(num1), Double.parseDouble(num2));
                logger.info("Subtract method called");
                break;
            case "*":
                result = calculation.multiply(Double.parseDouble(num1), Double.parseDouble(num2));
                logger.info("Multiply method called");
                break;
            case "/":
                result = calculation.divide(Double.parseDouble(num1), Double.parseDouble(num2));
                logger.info("Divide method called");
                break;
            default:
                result = 0;
                logger.warn("Calculate was called with an invalid operator");
                break;
        }
        logger.info("Calculation done. Result: " + result);
        return result;
    }
}
