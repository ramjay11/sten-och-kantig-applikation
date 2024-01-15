package com.ramjava.sten.och.kantig.backend.repository;

import com.ramjava.sten.och.kantig.backend.model.Rockstjarnor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Rockstjarnanstalld extends JpaRepository<Rockstjarnor, Long> {
}
