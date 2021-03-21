package com.southAfricaMobileNumbers.repositoriy;

import com.southAfricaMobileNumbers.model.Number;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NumbersRepository extends JpaRepository<Number, Long> {
    public List<Number> findAllByPreviousNotNull();
}
