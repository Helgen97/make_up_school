package com.makeupshool.backend.services.implementations;

import com.makeupshool.backend.data.MainDescription;
import com.makeupshool.backend.dto.MainDescriptionDTO;
import com.makeupshool.backend.exceptions.NotFoundException;
import com.makeupshool.backend.repositories.MainDescriptionRepo;
import com.makeupshool.backend.services.interfaces.PrimaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MainDescriptionService implements PrimaryService<MainDescription, MainDescriptionDTO, Short> {

    @Autowired
    private MainDescriptionRepo mainDescriptionRepo;

    @Override
    public List<MainDescriptionDTO> getAll() {
        return mainDescriptionRepo.findAll().stream().map(MainDescriptionDTO::of).collect(Collectors.toList());
    }

    @Override
    public MainDescriptionDTO getById(Short id) {
        return MainDescriptionDTO.of(mainDescriptionRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Description with %d not found".formatted(id))
        ));
    }

    @Override
    public MainDescriptionDTO create(MainDescriptionDTO newData) {
        return MainDescriptionDTO.of(mainDescriptionRepo.save(MainDescription.of(newData)));
    }

    @Override
    public MainDescriptionDTO updateById(Short id, MainDescriptionDTO updatedData) {
        MainDescription description = mainDescriptionRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Description with id %d not found".formatted(id))
        );

        description.setUkr(updatedData.getUkr());
        description.setEn(updatedData.getEn());

        return MainDescriptionDTO.of(mainDescriptionRepo.save(description));
    }

    @Override
    public void deleteById(Short id) {
        mainDescriptionRepo.deleteById(id);
    }
}
