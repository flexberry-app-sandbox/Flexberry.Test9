package Test.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ном
 */
@Entity(name = "IISTestном")
@Table(schema = "public", name = "ном")
public class nom {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "нома")
    private String нома;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "kontr")
    @Convert("kontr")
    @Column(name = "контр", length = 16, unique = true, nullable = false)
    private UUID _kontrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "kontr", insertable = false, updatable = false)
    private kontr kontr;


    public nom() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getнома() {
      return нома;
    }

    public void setнома(String нома) {
      this.нома = нома;
    }


}