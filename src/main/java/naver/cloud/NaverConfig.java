package naver.cloud;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import lombok.Data;

// 설정파일
@Configuration
@PropertySource("classpath:/naver.properties")
@ConfigurationProperties(prefix = "ncp")
@Data
public class NaverConfig {

	// properties 파일에서 선언된 값 중에
	// ncp.* 이름으로 된 프로퍼티 값들을 받을 필드 선언
	
	private String accessKey; // ncp.accessKey 값을 받을 변수
	private String secretKey;
	private String regionName;
	private String endPoint;
}
