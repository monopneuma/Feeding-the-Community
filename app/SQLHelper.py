import sqlite3


# The Purpose of this Class is to separate out any Database logic
class SQLHelper():

    #################################################
    # Database Queries
    #################################################

    def get_data_from_zip(self, zips):
        con = sqlite3.connect("app/location_database.sqlite")
        cur = con.cursor()
        cur.execute("""
                         SELECT company_name, type, secondary_type, address, latitude, longitude
                            FROM locations
                            WHERE zip_code=?
                            """, zips)
        data = cur.fetchall()
        con.close()
        return data


if __name__ == "__main__":
    helper = SQLHelper()
    helper.get_data_from_zip((23219,))
