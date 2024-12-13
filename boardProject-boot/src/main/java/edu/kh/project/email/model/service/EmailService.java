package edu.kh.project.email.model.service;

import java.util.Map;

public interface EmailService {

	/** 이메일 보내기
	 * @param string : 무슨 이메일을 발송할지 구분할 key로 쓰임
	 * @param email
	 * @return authKey
	 */
	String sendEmail(String string, String email);

	int checkAuthKey(Map<String, String> map);
}
