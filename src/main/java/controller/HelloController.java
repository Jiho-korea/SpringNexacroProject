/*
========================================================================
파    일    명 : HelloController.java
========================================================================
작    성    자 : 강지호
작    성    일 : 2020.10.23
작  성  내  용 : HelloWorld 출력 뷰 매핑 컨트롤러 
========================================================================
*/

package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

	@RequestMapping("/springView")
	public String hello() {
		return "hello/hello";
	}

}
