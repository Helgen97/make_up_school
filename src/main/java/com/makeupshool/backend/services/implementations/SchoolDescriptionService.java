package com.makeupshool.backend.services.implementations;

import com.makeupshool.backend.data.SchoolDescription;
import com.makeupshool.backend.dto.SchoolDescriptionDTO;
import com.makeupshool.backend.exceptions.NotFoundException;
import com.makeupshool.backend.repositories.SchoolDescriptionRepo;
import com.makeupshool.backend.services.interfaces.PrimaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SchoolDescriptionService implements PrimaryService<SchoolDescription, SchoolDescriptionDTO, Byte> {

    @Autowired
    private SchoolDescriptionRepo descriptionRepo;

    @Override
    public List<SchoolDescriptionDTO> getAll() {
        return descriptionRepo.findAll().stream().map(SchoolDescriptionDTO::of).collect(Collectors.toList());
    }

    @Override
    public SchoolDescriptionDTO getById(Byte id) {
        return SchoolDescriptionDTO.of(descriptionRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Description with id %d not found".formatted(id))
        ));
    }

    @Override
    public SchoolDescriptionDTO create(SchoolDescriptionDTO newData) {
        return SchoolDescriptionDTO.of(descriptionRepo.save(SchoolDescription.of(newData)));
    }

    @Override
    public SchoolDescriptionDTO updateById(Byte id, SchoolDescriptionDTO updatedData) {
        SchoolDescription description = descriptionRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Description with id %d not found".formatted(id))
        );

        description.setUkr(updatedData.getUkr());
        description.setEn(updatedData.getEn());

        return SchoolDescriptionDTO.of(descriptionRepo.save(description));
    }

    @Override
    public void deleteById(Byte id) {
        descriptionRepo.deleteById(id);
    }
}
