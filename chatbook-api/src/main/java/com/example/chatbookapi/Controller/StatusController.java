package com.example.chatbookapi.Controller;

import com.example.chatbookapi.Entity.*;
import com.example.chatbookapi.Service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RequestMapping("/api/statusService")
public class StatusController {

    @Autowired
    StatusService statusService;

    @PostMapping("/save")
    public Status saveStatus(@RequestBody Status status) {
        return statusService.saveStatus(status);
    }


    @GetMapping("/getAllStatus")
    public List<Status> getAllStatus() {
        return statusService.getAllStatus();
    }
}
