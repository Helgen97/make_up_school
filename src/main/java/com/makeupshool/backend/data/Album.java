package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.AlbumDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Albums")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Short id;

    @Column(length = 500)
    private String imageUrl;

    @ElementCollection
    private List<String> photoUrls;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "album_ukr_id", referencedColumnName = "id")
    private AlbumDetails ukr;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "album_en_id", referencedColumnName = "id")
    private AlbumDetails en;

    private Album(Short id, String imageUrl, List<String> photoUrls, AlbumDetails ukr, AlbumDetails en) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.photoUrls = photoUrls;
        this.ukr = ukr;
        this.en = en;
    }

    public static Album of(AlbumDTO albumDTO) {
        return new Album(
                albumDTO.getId(),
                albumDTO.getImageUrl(),
                albumDTO.getPhotoUrls(),
                AlbumDetails.of(albumDTO.getUkr()),
                AlbumDetails.of(albumDTO.getEn())
        );
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Album album = (Album) o;
        return Objects.equals(getId(), album.getId()) && Objects.equals(getImageUrl(), album.getImageUrl()) && Objects.equals(getPhotoUrls(), album.getPhotoUrls()) && Objects.equals(getUkr(), album.getUkr()) && Objects.equals(getEn(), album.getEn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getImageUrl(), getPhotoUrls(), getUkr(), getEn());
    }
}
