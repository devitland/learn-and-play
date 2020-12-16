//Массив вопросов и ответа
	let data_array = [
	  ["Как в английском языке называется простое прошедшее время?","Present Simple","Present Perfect","Past Simple","Present Continius",3],
	  ["Перевод слова: Hello","Как дела?","Привет","Ты","Дом",2],
	  ["Какое слово пропущенно: We ___ students.","are","is","being","be",1],
	  ["Как в английском языке называется простое настоящее время?","Present Simle","Present Perfect","Present Future Continius","Past Continius",1],
	  ["Перевод слова: Tree","Три","Собака","Дерево","Дом",3],
	  ["Какое слово пропущенно: ___ you play tennis yesterday?","Does","Did","Do","Doing",2],
	  ["Перевидите на английский: Я иду гулять","I am going for a walk","I have a dog","I love my parents","I eat ice-cream",1],
	  ["Какое слово пропущенно: My younger brother ___ dinner last night.","cooks","cooked","cook","cooking",2],
	  ["Какое слово пропущенно: Will you ___ your car to school tomorrow?","driving","drives","drive","drove",3],
	  ["Перевод слова: змея","document","chair","disk","snake",4],
	];

	let plus = 0;
	let time = 0;
	let cur_answer = 0;
	let count_answer = data_array.length;
	
	function check(num){

		if(num == 0){ 
		
			document.getElementById('option1').style.display='block';
			document.getElementById('option2').style.display='block';
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			document.getElementById('question').style.display='block';

			document.getElementById('option1').innerHTML=data_array[cur_answer][1];
			document.getElementById('option2').innerHTML=data_array[cur_answer][2];
			document.getElementById('option3').innerHTML=data_array[cur_answer][3];
			document.getElementById('option4').innerHTML=data_array[cur_answer][4];
			document.getElementById('question').innerHTML=data_array[cur_answer][0];
			
			document.getElementById('start').style.display='none';
			document.getElementById('end').style.display='inline-block';
			
						
		}else{

			if( num ==  data_array[cur_answer][5]){
				plus++;
				document.getElementById('result').innerHTML='Верно!';
			}else{
				document.getElementById('result').innerHTML="Неверно! Правильный ответ: " + data_array[cur_answer][data_array[cur_answer][5]];
			}
				
			cur_answer++;
			if(cur_answer < count_answer){
			
				document.getElementById('option1').innerHTML=data_array[cur_answer][1];
				document.getElementById('option2').innerHTML=data_array[cur_answer][2];
				document.getElementById('option3').innerHTML=data_array[cur_answer][3];
				document.getElementById('option4').innerHTML=data_array[cur_answer][4];
				document.getElementById('question').innerHTML=data_array[cur_answer][0];
				
			}else{
				
				
				document.getElementById('option1').style.display='none';
				document.getElementById('option2').style.display='none';
				document.getElementById('option3').style.display='none';
				document.getElementById('option4').style.display='none';
				document.getElementById('question').style.display='none';
				document.getElementById('end').style.display='inline-block';	
								
				document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer;
			}
		}
	}