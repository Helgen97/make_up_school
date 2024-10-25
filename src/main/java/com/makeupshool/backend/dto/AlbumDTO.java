package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.Album;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AlbumDTO {

    private Short id;
    private String imageUrl;
    private List<String> photoUrls;
    private AlbumDetailsDTO ukr;
    private AlbumDetailsDTO en;

    public static AlbumDTO of(Album album) {
        return new AlbumDTO(
                album.getId(),
                album.getImageUrl(),
                album.getPhotoUrls(),
                AlbumDetailsDTO.of(album.getUkr()),
                AlbumDetailsDTO.of(album.getEn()));
    }

}
