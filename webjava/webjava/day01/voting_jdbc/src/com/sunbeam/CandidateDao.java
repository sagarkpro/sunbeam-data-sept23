package com.sunbeam;

import java.util.List;
import java.util.Optional;

public interface CandidateDao extends AutoCloseable {
	List<Candidate> findAll() throws Exception;
	List<Candidate> findByParty(String party) throws Exception;
	List<Candidate> findAllOrderByVotesDesc() throws Exception;
	int save(Candidate c) throws Exception;
	int deleteById(int id) throws Exception;
	int update(Candidate c) throws Exception;
	Optional<Candidate> findById(int id) throws Exception;
}
