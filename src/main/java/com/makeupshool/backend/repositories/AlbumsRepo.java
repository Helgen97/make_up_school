package com.makeupshool.backend.repositories;

import com.makeupshool.backend.data.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumsRepo extends JpaRepository<Album, Short> {
}