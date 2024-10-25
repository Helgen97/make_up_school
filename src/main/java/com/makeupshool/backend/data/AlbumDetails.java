package com.makeupshool.backend.data;

import com.makeupshool.backend.dto.AlbumDetailsDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Objects;

@Entity
@Table(name = "Album_Details")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class AlbumDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Short id;

    @Column
    private String albumTitle;

    @Column(length = 300)
    private String albumDescription;

    @OneToOne(mappedBy = "ukr")
    private Album albumUkr;

    @OneToOne(mappedBy = "en")
    private Album albumEn;

    private AlbumDetails(Short id, String albumTitle, String albumDescription) {
        this.id = id;
        this.albumTitle = albumTitle;
        this.albumDescription = albumDescription;
    }

    public static AlbumDetails of(AlbumDetailsDTO dataDTO) {
        return new AlbumDetails(
                dataDTO.getId(),
                dataDTO.getAlbumTitle(),
                dataDTO.getAlbumDescription()
        );
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AlbumDetails that = (AlbumDetails) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getAlbumTitle(), that.getAlbumTitle()) && Objects.equals(getAlbumDescription(), that.getAlbumDescription()) && Objects.equals(getAlbumUkr(), that.getAlbumUkr()) && Objects.equals(getAlbumEn(), that.getAlbumEn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getAlbumTitle(), getAlbumDescription(), getAlbumUkr(), getAlbumEn());
    }
}
