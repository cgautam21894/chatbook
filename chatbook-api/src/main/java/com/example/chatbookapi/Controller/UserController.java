package com.example.chatbookapi.Controller;

import com.example.chatbookapi.Entity.*;
import com.example.chatbookapi.Service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("api/userService")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/save")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/userDetails")
    List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{userId}")
    Optional<User> getUser(@PathVariable("userId") UUID userId) {
        return userService.getUser(userId);
    }


    @DeleteMapping("/{userId}")
    String deleteUser(@PathVariable("userId") UUID userId) {
        return userService.deleteUser(userId);
    }
}
