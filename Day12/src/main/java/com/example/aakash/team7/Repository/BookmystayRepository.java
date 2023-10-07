package com.example.aakash.team7.Repository;

import com.example.aakash.team7.Entity.Bookmystay; // Import your entity class here
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookmystayRepository extends JpaRepository<Bookmystay, Long> {
}
