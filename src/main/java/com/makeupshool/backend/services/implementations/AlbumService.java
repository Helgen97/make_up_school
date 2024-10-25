package com.makeupshool.backend.services.implementations;

import com.makeupshool.backend.data.Album;
import com.makeupshool.backend.data.AlbumDetails;
import com.makeupshool.backend.dto.AlbumDTO;
import com.makeupshool.backend.exceptions.NotFoundException;
import com.makeupshool.backend.repositories.AlbumsRepo;
import com.makeupshool.backend.services.interfaces.PrimaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AlbumService implements PrimaryService<Album, AlbumDTO, Short> {

    @Autowired
    private AlbumsRepo albumsRepo;

    @Override
    public List<AlbumDTO> getAll() {
        return albumsRepo.findAll().stream().map(AlbumDTO::of).collect(Collectors.toList());
    }

    @Override
    public AlbumDTO getById(Short id) {
        return AlbumDTO.of(albumsRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Album with id %d not found".formatted(id))
        ));
    }

    @Override
    public AlbumDTO create(AlbumDTO newData) {
        return AlbumDTO.of(albumsRepo.save(Album.of(newData)));
    }

    @Override
    public AlbumDTO updateById(Short id, AlbumDTO updatedData) {
        Album album = albumsRepo.findById(id).orElseThrow(
                () -> new NotFoundException("Album with id %d not found".formatted(id))
        );

        album.setImageUrl(updatedData.getImageUrl());
        album.setPhotoUrls(updatedData.getPhotoUrls());
        album.setUkr(AlbumDetails.of(updatedData.getUkr()));
        album.setEn(AlbumDetails.of(updatedData.getEn()));

        return AlbumDTO.of(albumsRepo.save(album));
    }

    @Override
    public void deleteById(Short id) {
        albumsRepo.deleteById(id);
    }
}
