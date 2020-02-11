package com.CmapProject.Cmap.program;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RmitProgramJpaRepository extends JpaRepository<RmitProgram,RmitProgramId> {
	List<RmitProgram> findByProgramID(RmitProgramId programID);
}
