var Matrix_Space_Div = "Matrix";
var Default_Content = "...";
var Default_Matric_Element_Value = "O";
var Table_Color = new Array("#286113","#AA8837","#624689","#FZAB60","ABCDEF","#FAB1A1","#BEEB&A","#C2AF2E","#131311","#10F1A0");

function  MATRICER()
{
	var Arm = parseInt(document.getElementById("ARM").value);
	var MATRICS_GENRATED = MATRICS_CALCULATOR(Arm);
	
	if( !(MATRICS_GENRATED === "-1") )
		MATRICER_SHOW_OFF(MATRICS_GENRATED);
}

function MATRICER_SHOW_OFF(MATRICS)
{
	var Division = document.getElementById(Matrix_Space_Div);								// Division like Construction, Preview, Solution
	if(Division != null)
	{
		var Table_String = '<table border="1" bordercolor=' + Table_Color[5] + '>';
		var Matrix_Length = MATRICS.length;

		for(var i = 0; i < Matrix_Length; i++ )
		{
			Table_String += '<tr>';
			for(var j = 0; j < Matrix_Length; j++)
			{
				TD_Id = (i*Matrix_Length)+j;
				Table_String += '<td style="white-space: nowrap;" id="' + TD_Id + '" style="float:left;" width="35" ><center>' + MATRICS[i][j] + '</center></td>';
			}
			Table_String += '</tr>';
		}
		Table_String += '</table>';
		Division.innerHTML = Table_String;
	}
	else
	{
		alert("No Area Assigned to Display. Missing Element " + Matrix_Space_Div);
	}
}

function MATRICS_CALCULATOR(Arm)
{
	var Sum = document.getElementById("SUM").value;
	
	var number,choice;
	var middle = Sum/Arm;
	var Matricer_9X9;
	
	var Display_Matrix = new Array();
	
	switch(Arm)
	{
		case 1:
		case 3:
		case 5:
		case 7:
				{
					var a7X7 = new Array
					(

						new Array(middle+15, middle-26, middle-17, middle+16, middle-18, middle+19, middle+11),
						new Array(middle-20, middle+7, middle+9, middle-8, middle-13, middle+5, middle+20),
						new Array(middle-21, middle-10, middle+3, middle-4, middle+1, middle+10, middle+21),
						new Array(middle-12, middle-6, middle-2, middle, middle + 2, middle+6, middle+12),
						new Array(middle+24, middle+14, middle-1, middle+4, middle-3,	middle-14, middle-24),
						new Array(middle+25, middle-5, middle-9, middle+8, middle+13, middle-7, middle-25),
						new Array(middle-11, middle+26, middle+17, middle-16, middle+18, middle-19, middle-15)
					);
					
					var dimension = parseInt((7 - Arm)/2);
					var Index_1 = 0;
					var Index_2;
					for(var i = dimension; i < dimension + Arm; i++ )
					{
						Display_Matrix[Index_1] = new Array();
						Index_2 = 0;
						for(var j = dimension; j < dimension + Arm; j++)
						{
							Display_Matrix[Index_1][Index_2] = a7X7[i][j];
							Index_2++;
						}
						Index_1++;
					}
					
					return Display_Matrix;
				}
		case 4:
				{
					var a4X4 = new Array
					(
						new Array(middle+12, middle-6, middle-14, middle+8),
						new Array(middle-3, middle+2, middle-2, middle+3),
						new Array(middle-4, middle-1, middle+1, middle+4),
						new Array(middle-5, middle+5, middle+15, middle-15)
					);
					
					for(var i = 0; i < 4; i++ )
					{
						Display_Matrix[i] = new Array();
						for(var j = 0; j < 4; j++)
						{
							Display_Matrix[i][j] = a4X4[i][j];
						}
					}
					
					return Display_Matrix;
				}
		case 9:
				{
						var middles = new Array(
							new Array(middle+3, middle-4, middle+1),
							new Array(middle-2, middle, middle+2),
							new Array(middle-1, middle+4, middle-3)
						);
						
						var Logic_Array = new Array(
							new Array(30, -40, 10),
							new Array(-20, 0, 20),
							new Array(-10, 40, -30)
						);
						
						for(var i = 0; i < 3; i++)
						{
							Display_Matrix[i] = new Array();
							for(var j = 0; j < 3; j++)
							{
								Display_Matrix[i][j] = new Array();
								for(var k = 0; k < 3; k++)
								{	
									Display_Matrix[i][j][k] = new Array();
									for(var l = 0; l < 3; l++)	
									{
										Display_Matrix[i][j][k][l] = middles[k][l] + Logic_Array[i][j];
									}
								}
							}
						}
								
						var Division = document.getElementById(Matrix_Space_Div);								// Division like Construction, Preview, Solution
						if(Division != null)
						{
							var Table_String;
							Table_String = '<table border="1" bordercolor=' + Table_Color[9] + '>';
							for(var i = 0; i < 3; i++)
							{
								Table_String += "<tr>";
								for(var j = 0; j < 3; j++)
								{
									Table_String += "<td>";
									var Inner_Table = '<table border="1" bordercolor=' + Table_Color[i*j] + '>';
									for(var k = 0; k < 3; k++)
									{	
										Inner_Table += '<tr>'; 
										for(var l = 0; l < 3; l++)	
										{
											Inner_Table += "<td>" + Display_Matrix[i][j][k][l] + "</td>";
										}
										Inner_Table +="</tr>";
									}
									Inner_Table +="</table>";
									
									Table_String += Inner_Table;
									Table_String += "</td>";
								}
								Table_String += "</tr>";
							}
							Table_String +="</table>";
							
							Division.innerHTML = Table_String;
						}
						
				}
		case 0:
				return "-1";
		default:
				alert("YOU HAVE ENTERED A WRONG CHOICE. MATRIX NOT AVAILABLE.");
				return "-1";
	}
}
