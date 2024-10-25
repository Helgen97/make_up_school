package com.makeupshool.backend.controllers;

import com.makeupshool.backend.dto.ClientDTO;
import com.makeupshool.backend.dto.SettingsDTO;
import com.makeupshool.backend.services.implementations.SettingsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping("/api/clients")
@RequiredArgsConstructor
public class ClientsController {

    @Autowired
    private SettingsService service;

    @PostMapping
    @ResponseStatus(value = HttpStatus.OK)
    public void receiveClient(@RequestBody ClientDTO client) {
        SettingsDTO settings = service.getById((byte) 1);

        RestTemplate restTemplate = new RestTemplate();

        String TELEGRAM_URL = "https://api.telegram.org/bot%s/sendMessage";

        Map<String, String> params = new HashMap<String, String>();
        params.put("chat_id", settings.getChatId());
        params.put("text", client.toString());
        params.put("parse_mode", "html");

        ResponseEntity<String> response
                = restTemplate.postForEntity(TELEGRAM_URL.formatted(settings.getBotToken()), params, String.class);
    }

}
