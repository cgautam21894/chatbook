package com.example.chatbookapi.Controller;

import com.example.chatbookapi.Entity.*;
import com.example.chatbookapi.Service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("api/postService")
public class PostController {

    @Autowired
    PostService postService;


    @PostMapping("/save")
    public List<Post> savePost(@RequestBody Post post) {
        return postService.savePost(post);
    }

    @GetMapping("/getPost")
    public List<Post> getAllPost() {
        return postService.getAllPost();
    }

    @DeleteMapping("/{postId}")
    public List<Post> deletePost(@PathVariable("postId") final UUID postId) {
        return postService.deletePost(postId);
    }

}
