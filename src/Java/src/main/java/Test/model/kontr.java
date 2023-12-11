package Test.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: контр
 */
@Entity(name = "IISTestконтр")
@Table(schema = "public", name = "контр")
public class kontr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "когнтра")
    private String когнтра;


    public kontr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getкогнтра() {
      return когнтра;
    }

    public void setкогнтра(String когнтра) {
      this.когнтра = когнтра;
    }


}