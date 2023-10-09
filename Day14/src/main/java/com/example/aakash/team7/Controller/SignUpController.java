package com.example.aakash.team7.Controller;

import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aakash.team7.Entity.Bookmystay;
import com.example.aakash.team7.Service.BookmystayService;

@CrossOrigin("*")
@RestController
@RequestMapping("/Bookmystay")
public class SignUpController {

	@Autowired
	private BookmystayService  ser;

	@GetMapping(value = "/get")
	public ResponseEntity<Iterable<Optional<Bookmystay>>> getAllBookmystay() {
	    Iterable<Optional<Bookmystay>> bookmystays = ser.getAllBookmystay()
	                                                  .stream()
	                                                  .map(Optional::of)
	                                                  .collect(Collectors.toList());
	    return ResponseEntity.ok(bookmystays);
	}

	@PostMapping("/post")
	public ResponseEntity<Bookmystay> createUser(@RequestBody Bookmystay user){
		Bookmystay savedUser = ser.savebookmystay(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteDetails(@PathVariable Long id) {
	    ser.deletebookmystay(id);
	    return ResponseEntity.ok("Deleted Successfully");
	}

}