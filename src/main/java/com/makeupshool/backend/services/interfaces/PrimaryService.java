package com.makeupshool.backend.services.interfaces;

import java.util.List;

public interface PrimaryService<DATA, DTO, ID_TYPE> {

    List<DTO> getAll();

    DTO getById(ID_TYPE id);

    DTO create(DTO newData);

    DTO updateById(ID_TYPE id, DTO updatedData);

    void deleteById(ID_TYPE id);


}
