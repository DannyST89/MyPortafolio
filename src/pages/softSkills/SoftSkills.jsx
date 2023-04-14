import { Grid } from "@mui/material";
import Card from "../../components/Card";
import skills from "../../data/skills";

const SoftSkills = () => {
  return (
    <Grid container>
      {skills.map((skill) => (
        <Grid
          key={skill.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={2}
          display={"flex"}
        >
          <Card
            title={skill.title}
            urlImg={skill.urlImg}
            titleFormat={"h5"}
            cardHeight={200}
            cardWidth={300}
            margin={1}
            imgHeight={"5rem"}
            imgWidth={"5rem"}
          />
        </Grid>
      ))}
            
    </Grid>
  );
};

export default SoftSkills;
