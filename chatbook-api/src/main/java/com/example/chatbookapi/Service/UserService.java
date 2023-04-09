package com.example.chatbookapi.Service;

import com.example.chatbookapi.Entity.*;
import com.example.chatbookapi.Repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import java.time.*;
import java.util.*;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User saveUser(final User user) {
        user.setUserId(UUID.randomUUID());
        user.setActive(true);
        user.setJoiningDate(LocalDateTime.now());
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public String deleteUser(final UUID userId) {

        Optional<User> deleteUser = userRepository.findById(userId);
        if(Objects.nonNull(deleteUser)){
            return "Already Deleted";
        }
        userRepository.deleteById(userId);
        return "deleted user:" + userId.toString();
    }

    public Optional<User> getUser(final UUID userId) {
        Optional<User> user = userRepository.findById(userId);
        return user;
    }
}

