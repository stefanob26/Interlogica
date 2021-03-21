package com.southAfricaMobileNumbers;

import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

public class UtilityTest {
    public static String getTestJSONString(String pathJson) throws IOException {
        ResourceLoader resourceLoader = new DefaultResourceLoader();
        Resource resource = resourceLoader.getResource("classpath:".concat(pathJson));
        return new BufferedReader(new InputStreamReader(resource.getInputStream()))
                .lines().collect(Collectors.joining("\n"));
    }
}
