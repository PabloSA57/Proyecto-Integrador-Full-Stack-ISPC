import mysql.connector
try:
    connection = mysql.connector.connect(host='localhost',database='service_automotor',user='root',password='1234')
    
    # Tabla users con usuarios que contengan "ri" en su nombre
    # mySql_query = "select * from users where first_name like '%ri%'"

    # Tabla empleados con empleados cuyo cargo es "Gerencia de Servicio"
    mySql_query = "select * from empleado where cargo = 'Gerencia de Servicio'"

    

    cursor = connection.cursor()
    cursor.execute(mySql_query)
 
    rows=cursor.fetchall()
    for row in rows:
        print(row)
 
    cursor.close()
except mysql.connector.Error as error:
    print("Failed to insert record into MySQL table {}".format(error))
finally:
    if connection.is_connected():
        connection.close()
        print("MySQL connection is closed")
