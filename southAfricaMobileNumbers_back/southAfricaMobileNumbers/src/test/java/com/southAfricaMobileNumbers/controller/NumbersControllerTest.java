package com.southAfricaMobileNumbers.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.southAfricaMobileNumbers.UtilityTest;
import com.southAfricaMobileNumbers.model.Number;
import com.southAfricaMobileNumbers.repositoriy.NumbersRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class NumbersControllerTest {
    private static final Gson gson = new GsonBuilder().serializeNulls().create();
    @MockBean
    NumbersRepository numbersRepository;
    private NumbersController numbersController;

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @BeforeEach
    void setUp() {
        numbersController = new NumbersController(numbersRepository);
    }

    @Test
    void loadContext() {
        assertThat(numbersController).isNotNull();
    }

    @Test
    void add_single_number() throws IOException {

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> httpEntity = new HttpEntity<>(
                UtilityTest.getTestJSONString("numbers/singleNumbers.json"),
                httpHeaders
        );

        List<Number> response = gson.fromJson(
                UtilityTest.getTestJSONString("response/singleNumbersResponse.json"),
                new TypeToken<List<Number>>() {
                }.getType()
        );

        when(numbersRepository.saveAll(any())).thenReturn(response);

        assertThat(
                testRestTemplate.postForObject(
                        getPath("numbers", "v1"),
                        httpEntity,
                        String.class
                )
        ).contains(gson.toJson(response));

    }

    @Test
    void add_multiple_numbers() throws IOException {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> httpEntity = new HttpEntity<>(
                UtilityTest.getTestJSONString("numbers/multipleNumbers.json"),
                httpHeaders
        );

        List<Number> response = gson.fromJson(
                UtilityTest.getTestJSONString("response/multipleNumbersResponse.json"),
                new TypeToken<List<Number>>() {
                }.getType()
        );

        when(numbersRepository.saveAll(any())).thenReturn(response);

        assertThat(
                testRestTemplate.postForObject(
                        getPath("numbers", "v1"),
                        httpEntity,
                        String.class
                )
        ).contains(gson.toJson(response));
    }

    @Test
    void get_all_with_empty_list() throws IOException {
        when(numbersRepository.findAll()).thenReturn(new ArrayList<Number>());
        assertThat(testRestTemplate.getForObject(getPath("numbers", "v1"), String.class)).contains(UtilityTest.getTestJSONString("response/emptyResponse.json"));
    }

    @Test
    void get_all_numbers() throws IOException {
        List<Number> response = gson.fromJson(
                UtilityTest.getTestJSONString("response/multipleNumbersResponse.json"),
                new TypeToken<List<Number>>() {
                }.getType()
        );
        when(numbersRepository.findAll()).thenReturn(response);
        assertThat(testRestTemplate.getForObject(
                getPath("numbers", "v1"),
                String.class
                )
        ).contains(gson.toJson(response));
    }

    @Test
    void get_all_fixed_number() throws IOException {
        List<Number> response = gson.fromJson(
                UtilityTest.getTestJSONString("response/multipleNumbersResponse.json"),
                new TypeToken<List<Number>>() {
                }.getType()
        );

        response = response.stream().filter((el) -> {
            return Objects.nonNull(el.getPrevious());
        }).collect(Collectors.toList());

        when(numbersRepository.findAll()).thenReturn(response);
        assertThat(testRestTemplate.getForObject(
                getPath("numbers", "v1"),
                String.class
                )
        ).contains(gson.toJson(response));
    }

    private String getPath(String path, String apiVersion) {
        return String.format("http://localhost:%s/%s/api/%s", port, apiVersion, path);
    }

}