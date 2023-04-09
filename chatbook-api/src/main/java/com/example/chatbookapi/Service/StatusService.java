package com.example.chatbookapi.Service;

import com.example.chatbookapi.Entity.*;
import com.example.chatbookapi.Repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import java.time.*;
import java.util.*;

@Service
public class StatusService {

    @Autowired
    StatusRepository statusRepository;

    public Status saveStatus(Status status) {

        status.setStatusID(UUID.randomUUID());
        status.setUploadTIme(LocalDateTime.now());
        return statusRepository.save(status);
    }

    public List<Status> getAllStatus() {
        List<Status> result = new ArrayList<Status>();
        result = statusRepository.findAll();
        result.sort((e1, e2) -> e2.getUploadTIme().compareTo(e1.getUploadTIme()));
        return result;
    }

}
