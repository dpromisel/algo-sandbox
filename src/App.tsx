import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Grid, CircularProgress, TextField } from "@material-ui/core";
import { main, CreateAssetSimple } from "./asset";
import { useMutation } from "react-query";

function App() {
  const [status, setStatus]: [string, (s: string) => void] =
    useState<string>("Create Asset");

  const [assetName, setAssetName] = useState<string>("");
  const [unitName, setUnitName] = useState<string>("");

  const [explorerLink, setExplorerLink]: [string, (s: string) => void] =
    useState<string>("");

  const createAsset = useMutation(async () => {
    return CreateAssetSimple(
      assetName.toLocaleUpperCase(),
      unitName.toLocaleUpperCase(),
      setExplorerLink
    );
  });

  return (
    <Grid direction="column" alignItems="center" spacing={4} container>
      <Grid item>
        <h2> Create an Algo Standard Asset </h2>
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Asset Name"
          variant="outlined"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
        />
      </Grid>

      <Grid item>
        <TextField
          id="outlined-basic"
          label="Unit Name"
          variant="outlined"
          value={unitName}
          onChange={(e) => setUnitName(e.target.value)}
        />
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => createAsset.mutate()}
        >
          Create
        </Button>
      </Grid>
      <Grid item>
        {createAsset.isLoading && <CircularProgress color="primary" />}
      </Grid>
      <Grid item>
        <a href={explorerLink} target="_blank">
          {explorerLink}
        </a>{" "}
      </Grid>
    </Grid>
  );
}

export default App;
