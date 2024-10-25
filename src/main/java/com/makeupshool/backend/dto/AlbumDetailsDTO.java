package com.makeupshool.backend.dto;

import com.makeupshool.backend.data.AlbumDetails;
import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AlbumDetailsDTO {

    private Short id;
    private String albumTitle;
    private String albumDescription;

    public static AlbumDetailsDTO of(AlbumDetails albumDetails) {
        return new AlbumDetailsDTO(
                albumDetails.getId(),
                albumDetails.getAlbumTitle(),
                albumDetails.getAlbumDescription()
        );
    }

}
